export const stats = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Offline Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

export const leagueStandings = {
    header: [
        "Team Name",
        "Manager Name",
        "Last updated",
        "Total Points",
        "GW Points"
    ],
    body: [
        {
            teamname: "#OD1711",
            managername: "john doe",
            date: "17 Jun 2021",
            totpoints: "900",
            gwpoints: "294"
        },
        {
            teamname: "#OD1712",
            managername: "frank iva",
            date: "1 Jun 2021",
            totpoints: "400",
            gwpoints: "190"
        },
        {
            teamname: "#OD1713",
            managername: "anthony baker",
            date: "27 Jun 2021",
            totpoints: "200",
            gwpoints: "99"
        },
        {
            teamname: "#OD1712",
            managername: "frank iva",
            date: "1 Jun 2021",
            totpoints: "420",
            gwpoints: "567"
        },
        {
            teamname: "#OD1713",
            managername: "anthony baker",
            date: "27 Jun 2021",
            totpoints: "200",
            gwpoints: "567"
        }
    ]
}
