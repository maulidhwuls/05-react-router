type Props = {
    params: {
          blogId: string
    }
  }
  
  export default function BlogDetails({ params }: Props) {
    return (
          <h1>Ini adalah halaman blog {params.blogId}</h1>
    )
  }