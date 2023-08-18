import {Fragment} from 'react'
export default function Table({ data, config, keyFn }) {
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {
                        config.map((item) => {
                            if(item.header) return <Fragment key={item.label}>{item.header(keyFn)}</Fragment>

                            return <th key={item.label}>{item.label}</th>
                        })
                    }
                </tr>

            </thead>
            <tbody>
                {
                    data.map((item)=>(
                        <tr key={keyFn(item)} className="border-b">
                            {
                                config.map((column)=>(
                                    <td className="p-2" key={column.label}>
                                        {column.render(item)}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}