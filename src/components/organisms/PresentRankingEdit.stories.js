import PresentRankingEdit from './PresentRanking'

export default {
    component: PresentRankingEdit,
    title:'PresentRankingEdit'
}

const Template = (args) => <PresentRankingEdit {...args}/>

export const Default = Template.bind({})
Default.args = {
    gifts: [{
        ToUid: 'eginoyUid',
        Birthday: '2021/05/27',
        IsShow: true,
        Rank: 1,
        Name: '1万円を超えるマイク',
        URL: 'https://www.amazon.co.jp/gp/product/B08KDVW9Z3/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1',
        Comment: '欲しかったやつです!',
        InsertUid: 'hoge'
    },
    {
        ToUid: 'eginoyUid',
        Birthday: '2021/05/27',
        IsShow: true,
        Rank: 2,
        Name: 'example',
        URL: 'https://example.com',
        Comment: 'これはexample',
        InsertUid: 'hoge'
    }]
}