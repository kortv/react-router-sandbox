import React from 'react';

export default function RepoNepo({ userName, repoName }) {
  return (
    <div className='repo-nepo' style={{ color: 'red' }}>
      <h2>{userName} / {repoName}</h2>
    </div>
  );
}
