const vscode = require('vscode');

function activate(context) {
    console.log('MY EXT: activated');

    const disposable = vscode.commands.registerCommand('myExt.insertFio', () => {
        console.log('MY EXT: command called');

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Открой файл.');
            return;
        }

        const fio = 'Башун Александр Сергеевич';
        const pos = editor.selection.active;

        editor.edit(editBuilder => {
            editBuilder.insert(pos, fio);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    console.log('MY EXT: deactivated');
}

module.exports = {
    activate,
    deactivate
};
