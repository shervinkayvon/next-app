import React, { CSSProperties } from 'react'
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind
} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Next.js Email Template</Preview>
        <Tailwind>
          <Body className='bg-red-500'>
              <Container>
                  <Text className='font-bold text-3xl'>Hello {name}</Text>
                  <Link href='https://nextjs.org'>Next.js</Link>
              </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '32px',
  background: 'red'
}

export default WelcomeTemplate