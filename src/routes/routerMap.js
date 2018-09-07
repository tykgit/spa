import MIndex from '../components/index/Index';
import Calendars from '../components/header/Calendars';
import Echarts from '../components/chart/echarts/Echarts';
import UForm from '../components/form/Form';
// import noMatch from './404';
import RichText from "../components/richText/RichText";
import UploadEditor from "../components/upload/UploadEditor";
import DateilList from "../components/detail/tableList"

export default [
  { path: "/app", component: MIndex },
  { path: "/app/form", component: UForm },
  { path: "/app/header/Calendars", component: Calendars },
  { path: "/app/chart/echarts", component: Echarts },
  { path: "/app/richText", component: RichText },
  { path: "/app/upload", component: UploadEditor },
  { path: "/app/detail/dateilList", component: DateilList },
]