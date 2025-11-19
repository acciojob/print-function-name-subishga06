function functionName() {
    alert(arguments.callee.name);
}

// Make it available globally for Cypress tests
window.functionName = functionName;
