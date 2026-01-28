import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';

// --- Configuration ---
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash-preview-09-2025";
const DEFAULT_OPENAI_MODEL = "gpt-4-turbo-preview";

// --- Interfaces ---
export interface Persona {
  role: string;
  demographics: string;
  goals: string[];
  frustrations: string[];
}

export interface Opportunity {
  id: string | number;
  text: string;
  source: 'ai' | 'user';
  status: 'pending' | 'approved';
}

export interface JourneyStep {
  id: number | string;
  step: string;
  actor: string;
  action: string;
  systemResponse: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  painPoints: string[];
  opportunities: Opportunity[];
}

export interface Task {
  title: string;
  description: string;
  scenario: string;
}

export interface UserStory {
  title: string;
  story: string;
  acceptance: string[];
  painPointRef: string;
}

export interface FeedbackItem {
  id: number;
  page: string;
  url: string;
  sentiment: string;
  comment: string;
}

export interface LLMConfig {
  provider: 'gemini' | 'openai';
  apiKey: string;
  model: string;
}

// --- Mock Data ---
const INITIAL_PERSONA: Persona = {
  role: "Prospective Homebuyer",
  demographics: "Canadian Resident, Age 25-40, First-time buyer",
  goals: [
    "Find FHSA contribution limits",
    "Plan savings effectively for first home",
    "Maximize tax benefits"
  ],
  frustrations: [
    "Unclear contribution deadlines",
    "Confusion about carry-forward rules",
    "Lack of quick reference PDF guides",
    "Complex language regarding 'contribution room'"
  ]
};

const INITIAL_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    step: "Access FHSA Information",
    actor: "User",
    action: "Searches for contribution limits",
    systemResponse: "Shows $40,000 limit info",
    sentiment: "neutral",
    painPoints: ["Confusion about deadlines"],
    opportunities: [
      { id: 'opt1', text: "Add a bold 'Key Deadlines' callout box", source: 'ai', status: 'pending' },
      { id: 'opt2', text: "Link to 'Carry-forward' explainer video", source: 'ai', status: 'pending' }
    ]
  },
  {
    id: 2,
    step: "Review Details",
    actor: "User",
    action: "Reads about participation room",
    systemResponse: "Provides general text blocks",
    sentiment: "negative",
    painPoints: ["Lack of quick reference materials"],
    opportunities: [
      { id: 'opt3', text: "Create a downloadable 1-page PDF summary", source: 'ai', status: 'approved' }
    ]
  },
  {
    id: 3,
    step: "Navigate to Contribution",
    actor: "User",
    action: "Clicks detailed guidelines",
    systemResponse: "Navigates to contribution details page",
    sentiment: "neutral",
    painPoints: [],
    opportunities: []
  },
  {
    id: 4,
    step: "Analyze Rules",
    actor: "User",
    action: "Checks timing rules",
    systemResponse: "Shows rules about non-business days",
    sentiment: "negative",
    painPoints: ["Uncertainty about contribution timing"],
    opportunities: [
      { id: 'opt4', text: "Add a 'Contribution Date Calculator' widget", source: 'ai', status: 'pending' }
    ]
  },
  {
    id: 5,
    step: "Specific Scenarios",
    actor: "User",
    action: "Looks for spousal info",
    systemResponse: "Generic info provided",
    sentiment: "negative",
    painPoints: ["Inquiries about spousal accounts"],
    opportunities: [
      { id: 'opt5', text: "Rewrite spousal section with clear 'If/Then' examples", source: 'user', status: 'approved' }
    ]
  }
];

const INITIAL_TASKS: Task[] = [
  { title: "Check Tax Filing Deadlines", description: "Find info about deadlines and specific tax credits.", scenario: "Freelancer ensuring timely filing." },
  { title: "Access Tax Forms", description: "Download forms, guides, or publications.", scenario: "Small business owner needing T2125 form." },
  { title: "Find Contact Information", description: "Locate phone numbers or office locations.", scenario: "Urgent questions requiring representative assistance." },
  { title: "Understand Rights", description: "Learn about taxpayer rights and audit processes.", scenario: "User received notice of audit." }
];

const INITIAL_USER_STORIES: UserStory[] = [
  {
    title: "Confusion about Limits",
    story: "As a prospective homebuyer, I want to find out my FHSA limit so that I can plan my savings.",
    acceptance: ["Navigate to FHSA page", "Find clear 2024 limit", "Clarify carry-forward rules"],
    painPointRef: "Pain Point 1, 2"
  },
  {
    title: "Quick Reference Guide",
    story: "As a user, I want a downloadable PDF summary so that I can reference rules offline.",
    acceptance: ["Locate PDF link", "Download accurate summary"],
    painPointRef: "Pain Point 3"
  }
];

@Component({
  selector: 'app-cx-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    DialogModule,
    TagModule,
    SelectButtonModule,
    ToastModule,
    PanelModule,
    AvatarModule,
    DividerModule,
    BadgeModule,
    SidebarModule
  ],
  providers: [MessageService],
  template: `
    <div class="flex h-screen surface-ground font-family">
      <!-- Sidebar Navigation (Desktop) -->
      <div class="hidden md:flex flex-column w-18rem surface-section border-right-1 surface-border h-full fixed z-2">
        <div class="p-4 border-bottom-1 surface-border flex align-items-center gap-2">
          <i class="pi pi-th-large text-indigo-600 text-2xl"></i>
          <span class="font-bold text-xl text-indigo-600">CX Visualizer</span>
        </div>
        
        <div class="flex-1 overflow-y-auto p-3">
          <ul class="list-none p-0 m-0 flex flex-column gap-2">
            <li>
              <button pButton class="p-button-text w-full justify-content-start" [class.surface-100]="activeView === 'journey'" (click)="activeView = 'journey'">
                <i class="pi pi-map mr-2"></i> Journey Map
              </button>
            </li>
            <li>
              <button pButton class="p-button-text w-full justify-content-start" [class.surface-100]="activeView === 'persona'" (click)="activeView = 'persona'">
                <i class="pi pi-users mr-2"></i> Personas
              </button>
            </li>
            <li>
              <button pButton class="p-button-text w-full justify-content-start" [class.surface-100]="activeView === 'tasks'" (click)="activeView = 'tasks'">
                <i class="pi pi-list mr-2"></i> Task Analysis
              </button>
            </li>
            <li>
              <button pButton class="p-button-text w-full justify-content-start" [class.surface-100]="activeView === 'stories'" (click)="activeView = 'stories'">
                <i class="pi pi-file mr-2"></i> User Stories
              </button>
            </li>
          </ul>
        </div>

        <div class="p-3 border-top-1 surface-border flex flex-column gap-2">
          <button pButton label="AI Generator" icon="pi pi-bolt" class="p-button-outlined p-button-warning w-full" (click)="showGeneratorModal = true"></button>
          <button pButton label="Input Feedback" icon="pi pi-plus" class="w-full" (click)="showFeedbackModal = true"></button>
          
          <button *ngIf="feedbackData.length > 0 && !showRecentInputs" 
            pButton label="Show Recent Inputs" icon="pi pi-history" 
            class="p-button-text p-button-secondary w-full text-sm" 
            (click)="showRecentInputs = true">
          </button>

          <button pButton label="Configuration" icon="pi pi-cog" class="p-button-text p-button-secondary w-full" (click)="showSettingsModal = true"></button>
        </div>
      </div>

      <!-- Mobile Header -->
      <div class="md:hidden fixed top-0 left-0 right-0 surface-section border-bottom-1 surface-border p-3 flex justify-content-between align-items-center z-3">
        <span class="font-bold text-indigo-600 text-lg">CX Visualizer</span>
        <button pButton icon="pi pi-bars" class="p-button-text" (click)="mobileSidebarVisible = true"></button>
      </div>

      <!-- Mobile Sidebar -->
      <p-sidebar [(visible)]="mobileSidebarVisible" [fullScreen]="true">
        <div class="flex flex-column h-full">
           <div class="flex-1">
              <button pButton class="p-button-text w-full justify-content-start mb-2" (click)="activeView = 'journey'; mobileSidebarVisible = false"><i class="pi pi-map mr-2"></i> Journey Map</button>
              <button pButton class="p-button-text w-full justify-content-start mb-2" (click)="activeView = 'persona'; mobileSidebarVisible = false"><i class="pi pi-users mr-2"></i> Personas</button>
              <button pButton class="p-button-text w-full justify-content-start mb-2" (click)="activeView = 'tasks'; mobileSidebarVisible = false"><i class="pi pi-list mr-2"></i> Task Analysis</button>
              <button pButton class="p-button-text w-full justify-content-start mb-2" (click)="activeView = 'stories'; mobileSidebarVisible = false"><i class="pi pi-file mr-2"></i> User Stories</button>
           </div>
           <div class="flex flex-column gap-2">
              <button pButton label="AI Generator" icon="pi pi-bolt" class="p-button-outlined p-button-warning w-full" (click)="showGeneratorModal = true; mobileSidebarVisible = false"></button>
              <button pButton label="Input Feedback" icon="pi pi-plus" class="w-full" (click)="showFeedbackModal = true; mobileSidebarVisible = false"></button>
              <button pButton label="Config" icon="pi pi-cog" class="p-button-text p-button-secondary w-full" (click)="showSettingsModal = true; mobileSidebarVisible = false"></button>
           </div>
        </div>
      </p-sidebar>

      <!-- Main Content -->
      <main class="flex-1 md:ml-18rem p-4 md:p-6 pt-7 md:pt-6 overflow-y-auto relative">
        <p-toast></p-toast>

        <!-- Journey Map View -->
        <div *ngIf="activeView === 'journey'" class="fadein animation-duration-300">
          <div class="flex justify-content-between align-items-center mb-4">
            <div>
              <h2 class="text-2xl font-bold text-900 m-0">Journey Map</h2>
              <p class="text-500 m-0">Visualizing user interactions and current experiences.</p>
            </div>
            <div class="hidden md:flex gap-3">
              <span class="flex align-items-center text-sm text-600"><span class="w-1rem h-1rem bg-orange-100 border-1 border-orange-300 border-round mr-2"></span> Pain Point</span>
              <span class="flex align-items-center text-sm text-600"><i class="pi pi-star-fill text-indigo-500 mr-2"></i> AI Suggestion</span>
            </div>
          </div>

          <!-- Swimlane Table Look-alike using CSS Grid/Flex -->
          <div class="card surface-card p-4 border-round shadow-1 overflow-x-auto">
            <div class="min-w-max">
              <!-- Header -->
              <div class="grid grid-nogutter surface-50 p-3 border-round mb-4 font-bold text-700 text-center">
                <div class="col-4">User Action</div>
                <div class="col-4 border-left-1 surface-border">Current Experience</div>
                <div class="col-4 border-left-1 surface-border">Content Opportunities</div>
              </div>

              <!-- Steps -->
              <div class="flex flex-column gap-5 relative">
                <!-- Vertical Lines (Simulated) -->
                <div class="absolute top-0 bottom-0 left-33 w-1 border-left-1 border-dashed surface-border" style="left: 33.33%"></div>
                <div class="absolute top-0 bottom-0 left-66 w-1 border-left-1 border-dashed surface-border" style="left: 66.66%"></div>

                <div *ngFor="let step of journeySteps" class="grid grid-nogutter align-items-stretch z-1 relative">
                  
                  <!-- User Column -->
                  <div class="col-4 px-3 flex align-items-center justify-content-center">
                    <div class="p-3 border-round shadow-1 w-10 text-center surface-card border-1"
                         [ngClass]="{'border-red-200 text-red-700': step.sentiment === 'negative', 'border-indigo-200 text-indigo-700': step.sentiment !== 'negative'}">
                      <span class="font-medium text-sm">{{ step.action }}</span>
                      <div class="mt-2">
                        <i class="pi" [ngClass]="{'pi-check-circle text-green-500': step.sentiment === 'positive', 'pi-times-circle text-red-500': step.sentiment === 'negative', 'pi-minus-circle text-gray-400': step.sentiment === 'neutral'}"></i>
                      </div>
                    </div>
                  </div>

                  <!-- System/Current Experience Column -->
                  <div class="col-4 px-3 relative">
                    <!-- Arrow -->
                    <div class="absolute top-50 left-0 -ml-2 text-300" style="margin-top: -0.5rem;"><i class="pi pi-arrow-right"></i></div>
                    
                    <div class="surface-50 p-3 border-round border-1 surface-border h-full text-sm">
                      <div class="font-bold text-800 mb-2">{{ step.step || 'System Response' }}</div>
                      <p class="text-600 m-0 mb-3 line-height-3">{{ step.systemResponse }}</p>
                      
                      <div *ngIf="step.painPoints.length > 0" class="flex flex-column gap-2">
                        <div *ngFor="let pp of step.painPoints" class="flex align-items-start gap-2 bg-orange-50 border-1 border-orange-200 p-2 border-round text-xs text-orange-800">
                          <i class="pi pi-exclamation-circle mt-1"></i>
                          <span>{{ pp }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Opportunities Column -->
                  <div class="col-4 px-3 h-full">
                    <div class="bg-indigo-50 p-3 border-round border-1 border-indigo-100 h-full flex flex-column text-sm">
                      <div class="flex align-items-center gap-2 font-semibold text-indigo-900 mb-3">
                        <i class="pi pi-info-circle"></i>
                        <span>Improvements</span>
                      </div>

                      <div class="flex flex-column gap-2 flex-grow-1">
                        <div *ngFor="let opt of step.opportunities" 
                             class="p-2 border-round border-1 flex gap-2 align-items-start transition-colors"
                             [ngClass]="{'surface-card border-green-200 shadow-1': opt.status === 'approved', 'surface-0 border-indigo-200 border-dashed': opt.status === 'pending'}">
                          <i class="pi mt-1" [ngClass]="{'pi-star-fill text-indigo-400': opt.source === 'ai' && opt.status !== 'approved', 'pi-star-fill text-green-500': opt.source === 'ai' && opt.status === 'approved', 'pi-user text-gray-400': opt.source === 'user'}"></i>
                          
                          <span class="text-xs flex-grow-1" [ngClass]="{'text-700': opt.status === 'approved', 'text-500 font-italic': opt.status === 'pending'}">{{ opt.text }}</span>

                          <div *ngIf="opt.status === 'pending'" class="flex gap-1">
                            <button pButton icon="pi pi-check" class="p-button-rounded p-button-text p-button-success p-0 w-2rem h-2rem" (click)="handleApprove(step.id, opt.id)"></button>
                            <button pButton icon="pi pi-times" class="p-button-rounded p-button-text p-button-danger p-0 w-2rem h-2rem" (click)="handleReject(step.id, opt.id)"></button>
                          </div>
                        </div>
                      </div>

                      <div class="mt-3 pt-2 border-top-1 border-indigo-100">
                        <div class="p-inputgroup">
                          <input type="text" pInputText placeholder="Add idea..." class="p-inputtext-sm" #manualOptInput (keydown.enter)="manualOptInput.value ? handleAddManual(step.id, manualOptInput) : null">
                          <button type="button" pButton icon="pi pi-plus" class="p-button-indigo" (click)="manualOptInput.value ? handleAddManual(step.id, manualOptInput) : null"></button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Persona View -->
        <div *ngIf="activeView === 'persona'" class="fadein animation-duration-300">
          <h2 class="text-2xl font-bold text-900 mb-2">User Persona</h2>
          <p class="text-500 mb-4">Target audience profile.</p>
          
          <div class="grid">
            <div class="col-12 md:col-4">
              <div class="card surface-card p-4 border-round shadow-1 text-center">
                <p-avatar icon="pi pi-user" size="xlarge" shape="circle" styleClass="bg-indigo-50 text-indigo-500 mb-3"></p-avatar>
                <h3 class="text-xl font-bold m-0 text-800">{{ persona.role }}</h3>
                <p class="text-500 mt-2">{{ persona.demographics }}</p>
              </div>
            </div>
            <div class="col-12 md:col-8">
              <div class="flex flex-column gap-3">
                <div class="card surface-card p-4 border-round shadow-1">
                  <h4 class="m-0 mb-3 text-800">Goals & Needs</h4>
                  <ul class="list-none p-0 m-0 flex flex-column gap-2">
                    <li *ngFor="let goal of persona.goals" class="flex align-items-center gap-2">
                      <span class="w-1rem h-1rem border-circle bg-green-400"></span>
                      <span class="text-700">{{ goal }}</span>
                    </li>
                  </ul>
                </div>
                <div class="card surface-card p-4 border-round shadow-1">
                  <h4 class="m-0 mb-3 text-800">Pain Points & Frustrations</h4>
                  <ul class="list-none p-0 m-0 flex flex-column gap-2">
                    <li *ngFor="let frust of persona.frustrations" class="flex align-items-center gap-2">
                      <span class="w-1rem h-1rem border-circle bg-red-400"></span>
                      <span class="text-700">{{ frust }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Task Analysis View -->
        <div *ngIf="activeView === 'tasks'" class="fadein animation-duration-300">
          <h2 class="text-2xl font-bold text-900 mb-2">Task Analysis</h2>
          <p class="text-500 mb-4">Breakdown of user tasks and scenarios.</p>
          
          <div class="flex flex-column gap-3">
            <div *ngFor="let task of tasks" class="card surface-card p-4 border-round shadow-1 hover:shadow-3 transition-shadow transition-duration-200">
              <div class="flex flex-column md:flex-row gap-4 align-items-start">
                <div class="md:w-4">
                  <h4 class="text-lg font-bold m-0 text-800">{{ task.title }}</h4>
                  <p class="text-500 mt-1">{{ task.description }}</p>
                </div>
                <div class="hidden md:block w-1px bg-gray-200 align-self-stretch"></div>
                <div class="md:w-8 bg-blue-50 p-3 border-round border-1 border-blue-100">
                  <span class="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1 block">Scenario</span>
                  <p class="text-sm text-700 font-italic m-0">"{{ task.scenario }}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- User Stories View -->
        <div *ngIf="activeView === 'stories'" class="fadein animation-duration-300">
          <h2 class="text-2xl font-bold text-900 mb-2">User Stories</h2>
          <p class="text-500 mb-4">Agile user stories mapped to identified pain points.</p>
          
          <div class="grid">
            <div *ngFor="let story of userStories" class="col-12 md:col-6 flex">
              <div class="card surface-card p-4 border-round shadow-1 flex flex-column w-full">
                <div class="flex justify-content-between align-items-start mb-3">
                  <h3 class="font-bold text-800 m-0">{{ story.title }}</h3>
                  <p-tag [value]="story.painPointRef || 'General'" severity="warning"></p-tag>
                </div>
                <div class="bg-gray-50 p-3 border-round border-1 border-gray-200 mb-3 flex-grow-1">
                  <p class="text-700 font-medium m-0 line-height-3">"{{ story.story }}"</p>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-500 uppercase mb-2">Acceptance Criteria</h4>
                  <ul class="list-none p-0 m-0 flex flex-column gap-2">
                    <li *ngFor="let ac of story.acceptance" class="flex align-items-center gap-2 text-sm text-600">
                      <span class="w-1 h-1 border-circle bg-gray-400"></span>
                      {{ ac }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Inputs Floating Panel -->
        <div *ngIf="feedbackData.length > 0 && showRecentInputs" class="fixed bottom-0 right-0 m-4 w-20rem border-round-xl shadow-6 overflow-hidden z-5 animation-duration-300 slide-in-up surface-overlay border-1 surface-border">
          <div class="bg-gray-900 text-white px-3 py-2 flex justify-content-between align-items-center">
            <div class="flex align-items-center gap-2">
              <span class="font-medium text-sm">Recent Inputs</span>
              <p-badge [value]="feedbackData.length.toString()" styleClass="bg-gray-700"></p-badge>
            </div>
            <button pButton icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain text-white h-2rem w-2rem" (click)="showRecentInputs = false"></button>
          </div>
          <div class="max-h-15rem overflow-y-auto p-3 flex flex-column gap-3 bg-white">
            <div *ngFor="let fb of feedbackData" class="border-bottom-1 surface-border pb-2">
              <div class="flex justify-content-between mb-1">
                <div class="overflow-hidden text-overflow-ellipsis white-space-nowrap w-9">
                  <span class="font-semibold text-700 block text-sm">{{ fb.page }}</span>
                  <span *ngIf="fb.url" class="text-xs text-indigo-500 block text-overflow-ellipsis overflow-hidden">{{ fb.url }}</span>
                </div>
                <i class="pi" [ngClass]="{'pi-smile text-green-500': fb.sentiment === 'positive', 'pi-thumbs-down text-red-500': fb.sentiment === 'negative', 'pi-circle text-gray-400': fb.sentiment === 'neutral'}"></i>
              </div>
              <p class="text-500 text-xs m-0 white-space-pre-line">{{ fb.comment }}</p>
            </div>
          </div>
        </div>

      </main>

      <!-- Input Feedback Modal -->
      <p-dialog header="Input Feedback" [(visible)]="showFeedbackModal" [modal]="true" [style]="{width: '450px'}" [draggable]="false" [resizable]="false">
        <div class="flex flex-column gap-3 pt-2">
          <div>
            <label class="block font-medium mb-2 text-700">Related Page / Step</label>
            <p-dropdown [options]="journeySteps" optionLabel="step" optionValue="step" [(ngModel)]="newFeedback.page" styleClass="w-full" appendTo="body"></p-dropdown>
          </div>

          <div>
            <label class="block font-medium mb-2 text-700">Page URL (Optional Analysis)</label>
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon"><i class="pi pi-link"></i></span>
              <input type="text" pInputText placeholder="https://example.com/page" [(ngModel)]="newFeedback.url">
              <button pButton icon="pi" [icon]="isAnalyzing ? 'pi-spin pi-spinner' : 'pi-search'" [label]="isAnalyzing ? 'Scanning' : 'Analyze'" (click)="handleAnalyzeUrl()" [disabled]="!newFeedback.url || isAnalyzing" class="p-button-outlined"></button>
            </div>
          </div>

          <!-- AI Predictions -->
          <div *ngIf="aiError" class="bg-red-50 text-red-600 p-2 border-round text-sm">{{ aiError }}</div>
          <div *ngIf="predictedPoints.length > 0" class="bg-blue-50 p-3 border-round border-1 border-blue-100">
            <div class="flex align-items-center gap-2 mb-2 text-sm font-semibold text-700">
              <i class="pi pi-star-fill text-orange-500"></i>
              <span>Suggested Pain Points</span>
            </div>
            <div class="flex flex-column gap-2">
              <button *ngFor="let point of predictedPoints" pButton class="p-button-outlined p-button-secondary p-button-sm text-left justify-content-start p-2 text-xs bg-white" (click)="handleAddPrediction(point)">
                <i class="pi pi-plus mr-2 opacity-50"></i> {{ point }}
              </button>
            </div>
          </div>

          <div>
            <label class="block font-medium mb-2 text-700">Sentiment</label>
            <p-selectButton [options]="sentimentOptions" [(ngModel)]="newFeedback.sentiment" optionLabel="label" optionValue="value" styleClass="w-full flex">
               <ng-template let-item>
                   <i [class]="item.icon + ' mr-2'"></i> {{item.label}}
               </ng-template>
            </p-selectButton>
          </div>

          <div>
            <label class="block font-medium mb-2 text-700">Feedback</label>
            <textarea pTextarea rows="4" class="w-full" placeholder="Describe the feedback..." [(ngModel)]="newFeedback.comment"></textarea>
          </div>
        </div>
        <ng-template pTemplate="footer">
          <button pButton label="Add Feedback" class="w-full" (click)="handleAddFeedback()"></button>
        </ng-template>
      </p-dialog>

      <!-- Settings Modal -->
      <p-dialog header="AI Configuration" [(visible)]="showSettingsModal" [modal]="true" [style]="{width: '400px'}" [draggable]="false" [resizable]="false">
        <div class="flex flex-column gap-4 pt-2">
          <div>
            <label class="block font-bold mb-2 text-700">LLM Provider</label>
            <div class="grid">
              <div class="col-6">
                <div class="p-3 border-round border-2 cursor-pointer text-center transition-colors"
                     [ngClass]="{'border-indigo-500 bg-indigo-50 text-indigo-700': llmConfig.provider === 'gemini', 'border-gray-200 hover:surface-100': llmConfig.provider !== 'gemini'}"
                     (click)="llmConfig.provider = 'gemini'">
                  <i class="pi pi-star-fill text-xl mb-2 block"></i>
                  <span class="font-medium text-sm">Google Gemini</span>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 border-round border-2 cursor-pointer text-center transition-colors"
                     [ngClass]="{'border-green-500 bg-green-50 text-green-700': llmConfig.provider === 'openai', 'border-gray-200 hover:surface-100': llmConfig.provider !== 'openai'}"
                     (click)="llmConfig.provider = 'openai'">
                  <i class="pi pi-globe text-xl mb-2 block"></i>
                  <span class="font-medium text-sm">OpenAI</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label class="block font-bold mb-2 text-700">API Key</label>
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon"><i class="pi pi-key"></i></span>
              <input type="password" pInputText [placeholder]="llmConfig.provider === 'gemini' ? 'Gemini Key' : 'OpenAI Key'" [(ngModel)]="llmConfig.apiKey">
            </div>
            <small class="text-500 block mt-1">
              {{ llmConfig.provider === 'gemini' ? "Leave blank to use default system key." : "API Key required for OpenAI." }}
            </small>
          </div>

          <div class="surface-50 p-2 border-round text-xs text-500 border-1 surface-border">
            <strong>Current Model:</strong> {{ llmConfig.provider === 'gemini' ? 'gemini-2.5-flash-preview' : 'gpt-4-turbo' }}
          </div>
        </div>
        <ng-template pTemplate="footer">
          <button pButton label="Save Configuration" class="w-full p-button-secondary" (click)="showSettingsModal = false"></button>
        </ng-template>
      </p-dialog>

      <!-- AI Generator Modal -->
      <p-dialog [(visible)]="showGeneratorModal" [modal]="true" [style]="{width: '500px'}" [draggable]="false" [resizable]="false" [header]="'AI Project Generator'" styleClass="custom-header-dialog">
        <ng-template pTemplate="header">
           <div class="flex align-items-center gap-2 text-orange-500">
             <i class="pi pi-bolt text-xl"></i>
             <span class="font-bold text-lg">AI Project Generator</span>
           </div>
        </ng-template>
        
        <div class="flex flex-column gap-3 pt-2">
          <p class="text-sm text-600 m-0">Enter a topic, user goal, or URL context. The AI will generate a Persona, Journey Map, Task List, and User Stories for you.</p>
          
          <div>
            <label class="block font-bold mb-2 text-700">Project Context</label>
            <textarea pTextarea rows="5" class="w-full" placeholder="e.g., Applying for a Passport online..." [(ngModel)]="generatorContext"></textarea>
          </div>

          <div *ngIf="generatorError" class="bg-red-50 text-red-700 p-3 border-round flex align-items-center gap-2">
            <i class="pi pi-exclamation-circle"></i>
            <span class="text-sm">{{ generatorError }}</span>
          </div>
        </div>

        <ng-template pTemplate="footer">
          <button pButton [label]="isGenerating ? 'Generating...' : 'Generate Dashboard'" [icon]="isGenerating ? 'pi pi-spin pi-spinner' : 'pi pi-star-fill'" 
                  class="w-full p-button-warning" [disabled]="!generatorContext || isGenerating" (click)="handleGenerateDashboard()"></button>
        </ng-template>
      </p-dialog>

    </div>
  `,
  styles: [`
    :host { display: block; }
    .h-screen { height: 100vh; }
    .fadein { animation: fadein 0.3s forwards; }
    @keyframes fadein {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideinup {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    .slide-in-up { animation: slideinup 0.3s ease-out forwards; }
    .custom-header-dialog .p-dialog-header { background: #fff7ed; }
  `]
})
export class JourneyMapComponent implements OnInit {
  // State
  activeView = 'journey';
  mobileSidebarVisible = false;
  showFeedbackModal = false;
  showSettingsModal = false;
  showGeneratorModal = false;
  showRecentInputs = true;

  // Data
  persona: Persona = INITIAL_PERSONA;
  journeySteps: JourneyStep[] = INITIAL_JOURNEY_STEPS;
  tasks: Task[] = INITIAL_TASKS;
  userStories: UserStory[] = INITIAL_USER_STORIES;
  feedbackData: FeedbackItem[] = [];

  // Forms & Config
  newFeedback = {
    page: INITIAL_JOURNEY_STEPS[0].step,
    url: "",
    sentiment: "negative",
    comment: ""
  };

  llmConfig: LLMConfig = {
    provider: 'gemini',
    apiKey: '',
    model: DEFAULT_GEMINI_MODEL
  };

  generatorContext = "";
  isGenerating = false;
  generatorError: string | null = null;

  isAnalyzing = false;
  predictedPoints: string[] = [];
  aiError: string | null = null;

  sentimentOptions = [
    { label: 'Positive', value: 'positive', icon: 'pi pi-smile' },
    { label: 'Neutral', value: 'neutral', icon: 'pi pi-circle' },
    { label: 'Negative', value: 'negative', icon: 'pi pi-thumbs-down' }
  ];

  private messageService = inject(MessageService);
  private http = inject(HttpClient);

  ngOnInit() {
    // Sync feedback page with first step initially
    if (this.journeySteps.length > 0) {
      this.newFeedback.page = this.journeySteps[0].step;
    }
  }

  // --- Methods ---

  handleApprove(stepId: number | string, optId: number | string) {
    const step = this.journeySteps.find(s => s.id === stepId);
    if (step) {
      const opt = step.opportunities.find(o => o.id === optId);
      if (opt) opt.status = 'approved';
    }
  }

  handleReject(stepId: number | string, optId: number | string) {
    const step = this.journeySteps.find(s => s.id === stepId);
    if (step) {
      step.opportunities = step.opportunities.filter(o => o.id !== optId);
    }
  }

  handleAddManual(stepId: number | string, input: HTMLInputElement) {
    const text = input.value.trim();
    if (!text) return;

    const step = this.journeySteps.find(s => s.id === stepId);
    if (step) {
      step.opportunities.push({
        id: Date.now(),
        text: text,
        source: 'user',
        status: 'approved'
      });
      input.value = '';
    }
  }

  async handleAnalyzeUrl() {
    if (!this.newFeedback.url) return;
    this.isAnalyzing = true;
    this.predictedPoints = [];
    this.aiError = null;

    const prompt = `
      You are a Senior UX Researcher.
      Analyze the user experience for the following URL or Page Title: "${this.newFeedback.url}".
      Predict 3-5 distinct, specific user pain points or usability frictions common for this type of page.
      
      Return ONLY a JSON object with the following structure:
      { "predictions": ["prediction 1", "prediction 2", "prediction 3"] }
    `;

    try {
      const data = await this.fetchLLM(prompt, 'json');
      if (data?.predictions) {
        this.predictedPoints = data.predictions.map((p: string) => `Detected: ${p}`);
      } else {
        this.aiError = "No specific pain points detected.";
      }
    } catch (error: any) {
      console.error("LLM Analysis Failed:", error);
      this.aiError = `Unable to analyze. ${error.message || 'Unknown Error'}`;
    } finally {
      this.isAnalyzing = false;
    }
  }

  handleAddPrediction(text: string) {
    const prefix = this.newFeedback.comment ? '\n' : '';
    this.newFeedback.comment += `${prefix}[AI Detected] ${text}`;
  }

  handleAddFeedback() {
    const feedbackItem: FeedbackItem = {
      id: Date.now(),
      ...this.newFeedback
    };
    this.feedbackData = [feedbackItem, ...this.feedbackData];
    this.showRecentInputs = true;

    if (this.newFeedback.sentiment === 'negative') {
      const step = this.journeySteps.find(s => s.step === this.newFeedback.page);
      if (step) {
        step.painPoints.push(this.newFeedback.comment);
      }
    }

    this.showFeedbackModal = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Feedback added to dashboard' });

    // Reset
    this.newFeedback = {
      page: this.journeySteps[0].step,
      url: "",
      sentiment: "negative",
      comment: ""
    };
    this.predictedPoints = [];
    this.aiError = null;
  }

  async handleGenerateDashboard() {
    if (!this.generatorContext) return;
    this.isGenerating = true;
    this.generatorError = null;

    const prompt = `
      You are a Product Designer and UX Strategist.
      Generate a complete Customer Experience (CX) dashboard dataset based on the following context or topic: "${this.generatorContext}".
      
      You need to generate 4 distinct sections of data:
      1. Persona: A detailed user persona relevant to this context.
      2. Journey Map: A 5-step user journey sequence with actions, system responses, pain points, AND content opportunities.
      3. Task Analysis: 4 key user tasks with scenarios.
      4. User Stories: 2-3 agile user stories with acceptance criteria.

      Return ONLY a JSON object with this exact schema:
      {
        "persona": {
          "role": "string",
          "demographics": "string",
          "goals": ["string", "string"],
          "frustrations": ["string", "string"]
        },
        "journey": [
          {
            "step": "string (Step Name/Page Title)",
            "action": "string (User Action)",
            "systemResponse": "string (System Response)",
            "sentiment": "positive" | "neutral" | "negative",
            "painPoints": ["string"],
            "opportunities": ["string (Proposed content change or fix)"]
          }
        ],
        "tasks": [
          { "title": "string", "description": "string", "scenario": "string" }
        ],
        "stories": [
          { "title": "string", "story": "As a [role], I want [action] so that [benefit]", "acceptance": ["string"], "painPointRef": "string" }
        ]
      }
    `;

    try {
      const data = await this.fetchLLM(prompt, 'json');

      if (data.persona) this.persona = data.persona;
      if (data.journey) {
        this.journeySteps = data.journey.map((s: any, i: number) => ({
          id: i,
          ...s,
          opportunities: (s.opportunities || []).map((optText: string, optIdx: number) => ({
            id: `gen-${i}-${optIdx}`,
            text: optText,
            source: 'ai',
            status: 'pending'
          }))
        }));

        // Update dropdown default
        if (this.journeySteps.length > 0) this.newFeedback.page = this.journeySteps[0].step;
      }
      if (data.tasks) this.tasks = data.tasks;
      if (data.stories) this.userStories = data.stories;

      this.showGeneratorModal = false;
      this.generatorContext = "";
      this.messageService.add({ severity: 'success', summary: 'Generated', detail: 'Dashboard updated with new project data' });

    } catch (error: any) {
      console.error("Dashboard Generation Failed:", error);
      this.generatorError = `Failed to generate dashboard. ${error.message}`;
    } finally {
      this.isGenerating = false;
    }
  }

  // --- LLM Service Logic ---
  async fetchLLM(promptText: string, mode: 'json' | 'text' = 'json'): Promise<any> {
    let endpoint, payload, headers: any;

    if (this.llmConfig.provider === 'openai') {
      endpoint = 'https://api.openai.com/v1/chat/completions';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.llmConfig.apiKey}`
      };
      payload = {
        model: DEFAULT_OPENAI_MODEL,
        messages: [{ role: "user", content: promptText }],
        response_format: mode === 'json' ? { type: "json_object" } : undefined
      };
    } else {
      const keyToUse = this.llmConfig.apiKey || ""; // Should be handled securely in prod
      endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${DEFAULT_GEMINI_MODEL}:generateContent?key=${keyToUse}`;
      headers = { 'Content-Type': 'application/json' };
      payload = {
        contents: [{ parts: [{ text: promptText }] }],
        generationConfig: mode === 'json' ? { responseMimeType: "application/json" } : undefined
      };
    }

    try {
      // Using fetch directly as it's easier for this one-file setup than injecting HttpClient logic with interceptors
      const response = await fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error (${response.status}): ${errText}`);
      }

      const data = await response.json();

      let textContent;
      if (this.llmConfig.provider === 'openai') {
        textContent = data.choices?.[0]?.message?.content;
      } else {
        textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
      }

      if (!textContent) throw new Error("No content generated from LLM.");

      return mode === 'json' ? JSON.parse(textContent) : textContent;

    } catch (error: any) {
      throw error;
    }
  }
}