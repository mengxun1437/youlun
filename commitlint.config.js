module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*):(\w*): (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['dev', 'opt', 'bug', 'util', 'doc', 'fmt', 'test', 'merge', 'release', 'branch', 'delbranch']
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['html']],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 5]
  }
}
