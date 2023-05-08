import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react'

export const CalButtons = ({ setTotalSum }) => {

    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');

    const handleClear = () => {
        setInput('');
        setResult(0);
    };
      function handleBackspace() {
        setInput(input.slice(0, -1));
      }
    const handleEquals = () => {
        try {
            const sumResults = eval(input).toString()
            setInput(sumResults);
        }
        catch (error) {
            setInput('Error')
        }

    };
    return (

        <div className="calculator">
            <Input value={input} disabled />
           <Row gutter={[16, 16]}>
             <Col span={6}>
                <Button type='primary' onClick={() => handleClear()}>AC</Button>
             </Col>
             <Col span={6}>
                <Button type='primary' onClick={() => setInput(input + '/')}>/</Button>
             </Col>
             <Col span={6}>
                <Button type='primary' onClick={() => setInput(input + '*')}>X</Button>
             </Col>
             <Col span={6}>
                <Button type='primary' onClick={() => handleBackspace()}>C</Button>
             </Col>
           </Row>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '7')}>
                        7
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '8')}>
                        8
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '9')}>
                        9
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '-')}>
                       -
                    </Button>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '4')}>
                        4
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '5')}>
                        5
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '6')}>
                        6
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '+')}>
                        +
                    </Button>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '1')}>
                        1
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '2')}>
                        2
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '3')}>
                        3
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary"  className='btne' onClick={() => handleEquals()}>
                        =
                    </Button>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Button type="primary" onClick={() => setInput(input + '%')}>
                        %
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={()=> setInput(input + '0')}>
                        0
                    </Button>
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={()=> setInput(input + '.')}>
                        .
                    </Button>
                </Col>
            </Row>
        </div>
    )

}