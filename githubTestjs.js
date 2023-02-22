const username = 'jrainbolt'; // replace with your GitHub username
const repo = 'jrainbolt.github.io'; // replace with the name of your repository
const commitsList = document.getElementById('commits-list');

fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
	.then(response => response.json())
	.then(commits => {
		commits.forEach(commit => {
			const li = document.createElement('li');
			const message = commit.commit.message;
			const author = commit.commit.author.name;
			li.innerText = `${message} - ${author}`;
			commitsList.appendChild(li);
		});
	});
