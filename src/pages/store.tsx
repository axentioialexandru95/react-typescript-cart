import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { items } from "../data/items"
export function Store() {
    return (
        <div>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className={'g-3'}>
                {items.map(item => (
                    <Col key={item.id} xs={12} md={6}>
                        <StoreItem {...item} />
                    </Col>
                ))}

                <Col></Col>
            </Row>
        </div>
    )
}