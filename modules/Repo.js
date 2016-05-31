import React from 'react';

export default function RepoNepo({ params }) {
  return (
    <div>
      <div className='repo'>
        <h2>{params.userName} / {params.repoName}</h2>
      </div>
    </div>
  );
}
