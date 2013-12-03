#!/usr/bin/env node

var spawn = require('child_process').spawn;

var cmd = process.argv[2];
var args = process.argv.slice(2);
var prg;

if (['init', 'add', 'commit', 'clone', 'checkout', 'status', 'diff', 'rm', 'mv'].indexOf(cmd) != -1) {
  prg = 'git';
} else if (['console', 'server', 'generate'].indexOf(cmd) != -1) {
  prg = 'rails';
} else {
  console.error('such command not understood');
  process.exit(1);
}

spawn(prg, args, { stdio: 'inherit' });
