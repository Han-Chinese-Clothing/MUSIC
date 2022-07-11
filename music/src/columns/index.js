import { formatSecondTime } from "@/utils/utils";
export const songListColumns = [
    {
        title: '序号',
        type: "index",
        width: '110',
        align: 'center'
    },
    {
        title: '歌曲',
        dataIndex: 'name',
        width: '440',
        slotName: 'image',
    },
    {
        title: '歌手',
        dataIndex: 'singer',
        width: '270',
        slotName: 'singer',
    },
    {
        title: '专辑',
        dataIndex: 'album',
        width: '165',
        slotName: 'album',
    },
    {
        title: '时长',
        dataIndex: 'duration',
        width: '165',
        customRender: (t, r) => {
            return formatSecondTime(t)
        }
    }
]