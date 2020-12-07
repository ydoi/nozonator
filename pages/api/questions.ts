// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type Category =
  | 'analyze'
  | 'integration'
  | 'saving_cost'
  | 'blockchain'
  | 'business'
  | 'computing'
  | 'container'
  | 'customer_engagement'
  | 'database'
  | 'developer_tool'
  | 'enduser_computing'
  | 'frontend'
  | 'game'
  | 'IoT'
  | 'machine_learning'
  | 'management_governance'
  | 'media_service'
  | 'migration_transfer'
  | 'networking'
  | 'contents_delivery'
  | 'quantum_tech'
  | 'robo'
  | 'artificial_satellite'
  | 'security'
  | 'identity'
  | 'compliance'
  | 'serverless'
  | 'storage'
  | 'vr_ar'

export default (req: any, res: any) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const text = '興味がありますか？'
  const categoryQuestions: { id: number, category?: Category, question: string }[] = [
    {id: 1, category: 'analyze', question: `データの分析に${text}`},
    {id: 2, category: 'integration', question: `アプリケーション間の連携に${text}`},
    {id: 3, category: 'saving_cost', question: `AWSのコストを節約したいですか？`},
    {id: 4, category: 'blockchain', question: `ブロックチェーンに${text}`},
    {id: 5, category: 'business', question: `ビジネスの効率化に${text}`},
    {id: 6, category: 'computing', question: `コンピューティングに${text}`},
    {id: 7, category: 'container', question: `コンテナ化に${text}`},
    {id: 8, category: 'customer_engagement', question: `顧客とのエンゲージメントに${text}`},
    {id: 9, category: 'database', question: `データベースに${text}`},
    {id: 10, category: 'developer_tool', question: `開発の効率化に${text}`},
    {id: 11, category: 'enduser_computing', question: `エンドユーザー向けのコンピューティングに${text}`},
    {id: 12, category: 'frontend', question: `フロントエンド開発の効率化に${text}`},
    {id: 13, category: 'game', question: `ゲーム開発に${text}`},
    {id: 14, category: 'IoT', question: `IoT(モノのインターネット)に${text}`},
    {id: 15, category: 'machine_learning', question: `機械学習に${text}`},
    {id: 16, category: 'management_governance', question: `マネージメントとガバナンスに興味がありますか？`},
    {id: 16, category: 'media_service', question: `メディアサービスに${text}`},
    {id: 17, category: 'migration_transfer', question: `移行や転送に${text}`},
    {id: 18, category: 'networking', question: `ネットワーキングに${text}`},
    {id: 19, category: 'contents_delivery', question: `コンテンツ配信に${text}`},
    {id: 20, category: 'quantum_tech', question: `量子テクノロジーに${text}`},
    {id: 21, category: 'robo', question: `ロボット工学に${text}`},
    {id: 22, category: 'artificial_satellite', question: `人工衛星に${text}`},
    {id: 23, category: 'security', question: `セキュリティに${text}`},
    {id: 24, category: 'identity', question: `認証に${text}`},
    {id: 25, category: 'compliance', question: `コンプライアンスに${text}`},
    {id: 26, category: 'serverless', question: `サーバーレスに${text}`},
    {id: 27, category: 'storage', question: `ストレージに${text}`},
    {id: 28, category: 'vr_ar', question: `VR(バーチャルリアリティ)またはAR(拡張現実)に${text}`}
  ]

  // const detailQuestions: string[] =  []
  console.log(req.query);
  if (req.query.session) {
    res.json({question: 'あああ'})
  } else {
    console.log('初回')
    res.json({
      question: categoryQuestions[
        1 + Math.floor(Math.random() * categoryQuestions.length - 1)
      ].question,
      session: 'aaa',
    })
  }
}
