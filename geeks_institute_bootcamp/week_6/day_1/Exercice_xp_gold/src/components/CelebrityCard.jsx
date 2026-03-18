function CelebrityCard(celebrity) {
    return <div className="max-w-md bg-white shadow rounded p-4">
    <img src={celebrity.imageUrl} alt="" className="rounded mb-3" />
  
    <h2 className="text-xl font-bold mb-2">
      {celebrity.title}
    </h2>
  
    <p className="text-gray-600 mb-3">
      {celebrity.description}
    </p>
  
    <a className="bg-blue-500 text-white px-4 py-2 rounded" href={celebrity.buttonUrl}>
      {celebrity.buttonLabel}
    </a>
  </div>
}