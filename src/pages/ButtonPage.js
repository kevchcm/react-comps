import { GoBellFill, GoCloud } from 'react-icons/go'
import Button from '../components/Button'

export default function ButtonPage() {
    return (
        <div className="grid grid-cols-4">
            <div className="space-y-4">
                <div>
                    <Button primary onClick={()=>{console.log('entro')}}>
                        <GoBellFill />
                        Button 1
                    </Button>
                </div>
                <div>
                    <Button secondary>
                        <GoCloud />
                        Button 2
                    </Button>
                </div>
                <div>
                    <Button success>
                        Button 3
                    </Button>
                </div>
                <div>
                    <Button warning>
                        Button 4
                    </Button>
                </div>
                <div>
                    <Button danger>
                        Button 5
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <Button primary rounded>
                        Button 1
                    </Button>
                </div>
                <div>
                    <Button secondary rounded>
                        Button 2
                    </Button>
                </div>
                <div>
                    <Button success rounded>
                        Button 3
                    </Button>
                </div>
                <div>
                    <Button warning rounded>
                        Button 4
                    </Button>
                </div>
                <div>
                    <Button danger rounded>
                        Button 5
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <Button primary rounded outline>
                        Button 1
                    </Button>
                </div>
                <div>
                    <Button secondary rounded outline>
                        Button 2
                    </Button>
                </div>
                <div>
                    <Button success rounded outline>
                        Button 3
                    </Button>
                </div>
                <div>
                    <Button warning rounded outline>
                        Button 4
                    </Button>
                </div>
                <div>
                    <Button danger rounded outline>
                        Button 5
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <Button primary rounded>
                        Button 1
                    </Button>
                </div>
                <div>
                    <Button secondary rounded>
                        Button 2
                    </Button>
                </div>
                <div>
                    <Button success rounded>
                        Button 3
                    </Button>
                </div>
                <div>
                    <Button warning rounded>
                        Button 4
                    </Button>
                </div>
                <div>
                    <Button danger rounded>
                        Button 5
                    </Button>
                </div>
            </div>
        </div>
    )
}