import Head from "next/head"

export default function Seo({title}){
  return (
    <Head>
      <title>{title} | Song Portfolio</title>
      <link rel="shortcut icon" href="/mypicture.jpeg" />
    </Head>
  )
}