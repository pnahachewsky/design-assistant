import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import win32com.client as win32

# === Step 1. Ask user for webpage URL ===
url = input("Enter the URL of an HTML page: ").strip()

# === Step 2. Launch Chrome and load page ===
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
driver = webdriver.Chrome(options=options)

driver.get(url)
time.sleep(5)  # Wait for page to fully load

# === Step 3. Expand collapsible <details> tags ===
for tag in driver.find_elements(By.TAG_NAME, "details"):
    if not tag.get_attribute("open"):
        driver.execute_script("arguments[0].setAttribute('open', true);", tag)
time.sleep(1)

# === Step 4. Expand all CRA/WET tabs ===
tab_buttons = driver.find_elements(By.CSS_SELECTOR, '[role="tab"], ul.wb-tabs li a')
for btn in tab_buttons:
    try:
        driver.execute_script("arguments[0].scrollIntoView(true);", btn)
        btn.click()  # real user-level click triggers CRA JS
        time.sleep(1.2)  # allow Ajax tab content to load
        # Scroll to ensure lazy content loads
        driver.execute_script("window.scrollBy(0, 300);")
        time.sleep(0.4)
        driver.execute_script("window.scrollBy(0, -300);")
        time.sleep(0.4)
    except Exception as e:
        print("Skipped a tab:", e)

# Force all tab panels visible
driver.execute_script("""
document.querySelectorAll('[role="tabpanel"], .wb-tabs .tabpanels > div').forEach(p => {
    p.style.display = 'block';
    p.style.visibility = 'visible';
    p.hidden = false;
});
""")
time.sleep(1)

# === Step 5. Remove top navigation & footer ===
driver.execute_script("""
document.querySelectorAll('nav.gcweb-menu, footer#wb-info, header#wb-bnr, div#wb-tphp').forEach(e => e.remove());
""")
time.sleep(0.5)

# === Step 6. Try to select only between “You are here:” and “Date modified:” ===
try:
    start_elem = driver.find_element(By.XPATH, "//*[contains(text(), 'You are here:')]")
    end_elem = driver.find_element(By.XPATH, "//*[contains(text(), 'Date modified:')]")

    driver.execute_script("""
        const start = arguments[0];
        const end = arguments[1];
        const range = document.createRange();
        range.setStartBefore(start);
        range.setEndAfter(end);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    """, start_elem, end_elem)
    print("Selected content between breadcrumb and Date modified.")
except Exception as e:
    print("Could not select range accurately:", e)
    # fallback: select full body
    body = driver.find_element(By.TAG_NAME, "body")
    body.send_keys(Keys.CONTROL, 'a')

# === Step 7. Copy selected content to clipboard ===
body = driver.find_element(By.TAG_NAME, "body")
body.send_keys(Keys.CONTROL, 'c')
time.sleep(1)

driver.quit()

# === Step 8. Paste into Microsoft Word ===
word = win32.gencache.EnsureDispatch('Word.Application')
word.Visible = True
doc = word.Documents.Add()
selection = word.Selection
selection.Paste()

# === Step 9. Trim before/after markers in Word ===
content = doc.Content
text = content.Text

start_marker = "You are here:"
end_marker = "Date modified:"

start_pos = text.find(start_marker)
end_pos = text.rfind(end_marker)

if start_pos != -1 and end_pos != -1 and end_pos > start_pos:
    print("Cleaning document inside Word...")
    # Delete everything before "You are here:"
    doc.Range(0, start_pos).Delete()

    # Refresh text, then delete everything after "Date modified:"
    text = doc.Content.Text
    end_pos = text.rfind(end_marker)
    doc.Range(end_pos + len(end_marker), len(text)).Delete()
    print("Trimming complete.")
else:
    print("Could not find both markers in Word; keeping full content.")

# === Step 10. Unify all fonts to Calibri ===
doc.Content.Select()
word.Selection.Font.Name = "Calibri"

# === Step 11. Save outputs ===
save_path = r"C:\Users\rosaz\CopyMethod\output.docx"
cleaned_path = r"C:\Users\rosaz\CopyMethod\output_cleaned.docx"
doc.SaveAs(save_path) 
doc.SaveAs(cleaned_path)

print(f"Document saved to:\n - {save_path}\n - {cleaned_path}")
