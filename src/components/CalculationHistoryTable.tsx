import { CalculationHistory } from "@/types";
import { Table } from "@mantine/core";

export function CalculationHistoryTable({ history }: { history: CalculationHistory }) {
  // Utils
  const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // Functions
  const formatDateTime = (datetime: string) => {
    // Return a placeholder if the datetime is null or invalid. 
    // Note: isNaN(Date.parse(datetime)) is fragile and should be replaced with a better date validation library.
    if (datetime == null || isNaN(Date.parse(datetime))) {
      return '--';
    }

    return dateTimeFormatter.format(new Date(datetime));
  }

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Number (input)</Table.Th>
          <Table.Th>Value (output)</Table.Th>
          <Table.Th>Occurrences</Table.Th>
          <Table.Th>Datetime</Table.Th>
          <Table.Th>Last Datetime</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {Object.entries(history).map(([key, value]) => {
          return (
            <Table.Tr key={key}>
              <Table.Td>{value.number}</Table.Td>
              <Table.Td>{value.value}</Table.Td>
              <Table.Td>{value.occurrences}</Table.Td>
              <Table.Td>{formatDateTime(value.datetime)}</Table.Td>
              <Table.Td>{formatDateTime(value.last_datetime)}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  )
}