import SortableTable from '../components/SortableTable'

export default function TablePage() {
    const data = [
        { name:'Orange', color: 'bg-orange-500', score: 5 },
        { name:'Apple', color: 'bg-red-500', score: 3 },
        { name:'Banana', color: 'bg-yellow-500', score: 1 },
        { name:'Lime', color: 'bg-green-500', score: 4 }
    ]

    const config = [
        {
            label: 'Name',
            render: (item) => item.name,
            sortValue: (item) => item.name
        },
        {
            label: 'Color',
            render: (item) => <div className={`p-3 m-3 ${item.color}`}></div>
        },
        {
            label: 'Score',
            render: (item) => item.score,
            sortValue: (item) => item.score
        },
        {
            label: 'Score Square',
            render: (item) => item.score ** 2,
            sortValue: (item) => item.score ** 2
        }
    ]

    const keyFn = (item) => item.name

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}