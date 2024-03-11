// components/types.d.ts
import 'highcharts';
import 'highcharts/highcharts-more';
import 'highcharts/modules/exporting';
import 'highcharts/modules/offline-exporting';

declare module 'highcharts-react-official' {
  export default class HighchartsReact extends React.Component<any, any> {}
}

declare module 'highcharts' {
  export function Highcharts();
}