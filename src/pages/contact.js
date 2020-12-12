import React from "react"
import PrimaryLayout from "../Layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"

export default () => (
  <PrimaryLayout column="col-10">
    <div className="pt-5">
      <h1 className="text-center py-4">お問い合わせはこちらから</h1>
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Emailアドレス</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>件名</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>お問い合わせ内容</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
          <Button type="submit">送信する</Button>
        </Form.Group>
      </Form>
    </div>
  </PrimaryLayout>
)
