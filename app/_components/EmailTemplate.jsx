import {
  Html,
  Head,
  Preview,
  Body,
  Section,
  Heading,
  Text,
  Container,
} from '@react-email/components';

function EmailTemplate({ name, email, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>New message from Sidra Coaching website</Preview>
      <Body
        style={{
          backgroundColor: '##f0fdf4',
        }}
      >
        <Container
          style={{
            paddingLeft: '4px',
            paddingRight: '4px',
          }}
        >
          <Heading style={{ fontWeight: 'bold', fontSize: '24px' }}>
            New Contact Form Submission
          </Heading>
          <Section
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <Text>
              <strong>Name: </strong>
              {name}
            </Text>
            <Text>
              <strong>Email: </strong>
              {email}
            </Text>
            <Text>
              <strong>Subject: </strong>
              {subject}
            </Text>
            <Text>
              <strong>Message: </strong>
            </Text>
            <Text style={{ marginTop: '4px' }}>{message}</Text>
          </Section>
          <Text
            style={{ fontSize: '12px', color: '#064e3b', textAlign: 'center' }}
          >
            Sent automatically from Sidra Coaching website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
