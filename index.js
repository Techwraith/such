#!/usr/bin/env node

require('console.loge');
var spawn = require('child_process').spawn;

var cmd = process.argv[2];
var args = process.argv.slice(3);
var prg;

function printWow() {
  var indent;
  for (var i=0; i < 15; i++) {
    if (Math.random() < 0.5) continue;
    indent = '';
    for (var j=0; j < 70; j++) {
      if (Math.random() < 0.4) indent += ' ';
    }
    console.loge(Math.random() < 0.5 ? indent + 'wow' : '');
  }
}

if (['init', 'add', 'commit', 'clone', 'checkout', 'status', 'diff', 'rm', 'mv', 'push', 'pull', 'remote', 'log', 'loge'].indexOf(cmd) != -1) {
  if (cmd == 'loge') cmd = 'log';
  prg = 'git';
  args.unshift(cmd);
} else if (['install', 'link', 'publish'].indexOf(cmd) != -1) {
  prg = 'npm';
  args.unshift(cmd);
} else if (['console', 'server', 'generate'].indexOf(cmd) != -1) {
  prg = 'rails';
  args.unshift(cmd);
} else if (cmd == 'run') {
  prg = 'node';
  if (args.length == 0) {
    console.error('very need program. run such repl for node repl.');
    process.exit(1);
  }
} else if (cmd == 'repl') {
  prg = 'node';
  args = [];
} else if (cmd == 'edit') {
  prg = 'vim';
} else if (cmd == 'wow') {
  printWow();
  process.exit(0);
} else {
  console.error('such command not understood');
  process.exit(1);
}

spawn(prg, args, { stdio: 'inherit' });
