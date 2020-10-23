// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## installation

\`\`\`
${data.install}
\`\`\`


`;
}

module.exports = generateMarkdown;
