import images from "./images"

const data = {
    user: {
        name: 'Anshuman',
        img: images.avt
    },
    summary: [
        {
            title: 'Most Captained',
            subtitle: 'for GW 20',
            value: 'Mo Salah',
            percent: 70
        },
        {
            title: 'Wild Card Played',
            subtitle: 'for GW 20',
            value: '15',
            percent: 49
        },
        {
            title: 'Most Minues hits',
            subtitle: 'for GW 20',
            value: '20',
            percent: 38
        },
        {
            title: 'Most Triple Captained',
            subtitle: 'for GW 20',
            value: 'Haaland',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Your Rank',
        value: '#25',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Overall Rank'
        },
        {
            value: '9.876K',
            title: 'India Rank'
        },
        {
            value: '25',
            title: 'JPL Rank'
        },
        {
            value: '678',
            title: 'Total Points'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data