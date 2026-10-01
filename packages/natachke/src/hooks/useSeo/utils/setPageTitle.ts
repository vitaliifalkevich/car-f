const setPageTitle = (title: string | null) => {
  if (!title) return
  document.title = title
}

export default setPageTitle
