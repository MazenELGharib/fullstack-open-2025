import StatisticLine from "./StatisticLine"
const Statistics = ({good , neutral ,bad}) => {
    const total = good + bad + neutral
    const average = (good + (-bad)) / total 
    const positive = (good / total) * 100 +"%"

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> <h1>Statistics</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (good > 0 || neutral > 0 || bad > 0) ? (
                            <>
                                <StatisticLine text="Good" value={good} />
                                <StatisticLine text="Neutral" value={neutral} />
                                <StatisticLine text="Bad" value={bad} />
                                <StatisticLine text="Total" value={total} />
                                <StatisticLine text="Average" value={average} />
                                <StatisticLine text="Positive" value={positive} />
                            </>
                        ) : (
                            <tr>
                                <td>No feedback given</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Statistics