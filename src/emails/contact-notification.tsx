import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  serviceTitle: string;
  message: string;
}

// Sent to the company inbox via Resend (src/lib/email.ts) when the
// contact form is submitted — see src/app/api/contact/route.ts.
function ContactNotificationEmail({
  name,
  email,
  phone,
  serviceTitle,
  message,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ backgroundColor: "#f5f7fa", fontFamily: "sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "8px",
            maxWidth: "480px",
          }}
        >
          <Heading style={{ fontSize: "20px", color: "#0a1120" }}>
            New contact form submission
          </Heading>

          <Section>
            <Text style={{ margin: "4px 0" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ margin: "4px 0" }}>
              <strong>Email:</strong> {email}
            </Text>
            {phone ? (
              <Text style={{ margin: "4px 0" }}>
                <strong>Phone:</strong> {phone}
              </Text>
            ) : null}
            <Text style={{ margin: "4px 0" }}>
              <strong>Service:</strong> {serviceTitle}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#e5e7eb", margin: "20px 0" }} />

          <Section>
            <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export { ContactNotificationEmail };
