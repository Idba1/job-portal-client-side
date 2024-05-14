import { Document, Page, Text, View } from '@react-pdf/renderer';

const AppliedJobPDF = ({ jobs }) => (
  <Document>
    <Page size="A4" style={{ flexDirection: 'column', padding: 7 }}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10,color: 'blue' }}>Applied Job Summary</Text>
        {jobs.map(job => (
          <View key={job._id} style={{ fontSize: 12, marginBottom: 5 }}>
            <Text>Name: {job.name}</Text>
            <Text>Email: {job.email}</Text>
            <Text>Resume Link: {job.resumeLink}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default AppliedJobPDF;
