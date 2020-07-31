// Configure CodeMirror Keymap
require([
  'nbextensions/vim_binding/vim_binding',   // depends your installation
], function() {
  CodeMirror.Vim.map("n", "<Plug>(vim-binding-j)", "normal");
  CodeMirror.Vim.map("e", "<Plug>(vim-binding-k)", "normal");
});


