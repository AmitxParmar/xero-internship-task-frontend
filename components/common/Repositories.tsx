import React from "react"

type Repository = {
  title: string
}

const Repositories: React.FC<Repository> = ({ title }) => {
  return <div>Repositories</div>
}

export default Repositories
