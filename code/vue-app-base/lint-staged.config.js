module.exports = {
  'src/*.(js|vue)': ['eslint --fix'],
  'src/**/*.(js|jsx|tsx|ts|css|less|scss|html|vue|json|md|yaml)': [
    'prettier --write',
  ],
  '*.(js|jsx|tsx|ts|css|less|scss|html|vue|json|md|yaml)': ['prettier --write'],
}
