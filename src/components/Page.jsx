import { useParams } from "react-router-dom"

export default function Page() {
  const {pageId} = useParams();
  return (
    <div><h1>{`You're in page: ${pageId}`}</h1></div>
  )
}