import React from 'react'
import Layout from "../../components/Layouts"

type Props = {
    params:any;
}

function slug(props: Props) {
  return (
    <Layout>
        <p>4.2 ผลการพิจารณาของคณะกรรมการผู้ทรงคุณวุฒิเพื่อประเมินผลงานทางวิชาการของผู้ขอกำหนดตำแหน่งทางวิชาการ ตามประกาศ ก.พ.อ.ฯ (ฉบับที่ 2) พ.ศ. 2550 และที่แก้ไขเพิ่มเติม
        และตามประกาศ ก.พ.อ.ฯ พ.ศ.2560 และ (ฉบับที่ 2) พ.ศ.2561 และตามประกาศ ก.พ.อ.ฯ พ.ศ.2563 และที่แก้ไขเพิ่มเติม</p>
       <p> (1) กลุ่มที่ได้รับผลการประเมินครบตามเกณฑ์และผลการประเมินผ่านเป็นเอกฉันท์ตามประกาศ ก.พ.อ.ฯ กำหนด จำนวน 10 ราย</p>
        {JSON.stringify(props)}
    </Layout>
  )
}

// export async function getStaticPaths() {
//     const articles = await fetchAPI("/articles")
  
//     return {
//       paths: articles.map((article) => ({
//         params: {
//           slug: article.slug,
//         },
//       })),
//       fallback: false,
//     }
//   }
  
//   export async function getStaticProps({ params }) {
//     const articles = await fetchAPI(`/articles?slug=${params.slug}`)
//     const categories = await fetchAPI("/categories")
  
//     return {
//       props: { article: articles[0], categories },
//       revalidate: 1,
//     }
//   }

export default slug;