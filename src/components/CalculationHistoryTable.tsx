import { CalculationHistory } from "@/types";
import { Table } from "@mantine/core";
import { formatDateTime, formatNumber } from "@/formatters";

export function CalculationHistoryTable({ history }: { history: CalculationHistory }) {
  const sortedHistory = Object.entries(history).sort((a, b) => {
    return new Date(b[1].datetime).getTime() - new Date(a[1].datetime).getTime();
  });

  // Render
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
        {sortedHistory.map(([key, value]) => {
          return (
            <Table.Tr key={key}>
              <Table.Td>{value.number}</Table.Td>
              <Table.Td>{formatNumber(value.value)}</Table.Td>
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