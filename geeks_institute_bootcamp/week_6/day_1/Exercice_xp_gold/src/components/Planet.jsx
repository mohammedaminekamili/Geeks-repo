function Planet(props) {
   return <ul className="max-w-md mx-auto mt-6">
  <li className="border p-3 mb-2 rounded bg-gray-100">
    {props.planet}
  </li>
</ul>
}

export default Planet

