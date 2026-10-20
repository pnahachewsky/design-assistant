import {
  computed,
  signal
} from "./chunk-KRHY6Z2H.js";

// src/app/components/compare/compare-undo.store.ts
var DiffUndoStack = class {
  maxSize = 10;
  // adjust for however many undo's we want to allow
  stack = signal([], ...ngDevMode ? [{ debugName: "stack" }] : (
    /* istanbul ignore next */
    []
  ));
  canUndo = computed(() => this.stack().length > 0, ...ngDevMode ? [{ debugName: "canUndo" }] : (
    /* istanbul ignore next */
    []
  ));
  push(snapshot) {
    this.stack.update((s) => {
      const next = [...s, snapshot];
      return next.length > this.maxSize ? next.slice(next.length - this.maxSize) : next;
    });
  }
  pop() {
    const current = this.stack();
    if (current.length === 0)
      return void 0;
    const last = current[current.length - 1];
    this.stack.set(current.slice(0, -1));
    return last;
  }
  clear() {
    this.stack.set([]);
  }
};

export {
  DiffUndoStack
};
//# sourceMappingURL=chunk-D57SAGZH.js.map
