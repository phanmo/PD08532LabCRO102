import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Section, { SectionProps } from "../../components/Section";

const sectionsData: SectionProps[] = [
  {
    title: "Lịch trình",
    titleStyle: { fontWeight: "bold" },
    events: [
      {
        title: "Địa điểm",
        content: "Hồ tràm, Vũng Tàu",
      },
      {
        title: "Thời gian",
        content: "09:00 AM - 12:00 AM",
      },
      {
        title: "Phương tiện di chuyển",
        content: "Xe bus",
      },
      {
        title: "Hình ảnh",
        contentComponent: <Image source={require('../../assets/images/vungtau.jpeg')} style={{
          width: '100%',
          height: 180,
          resizeMode: 'cover',
          borderRadius: 4,
        }} />,
      }
    ]
  },
  {
    title: "Khách sạn",
    titleStyle: { fontWeight: 'bold' },
    events: [
      {
        title: "Tên khách sạn",
        content: "Hồng Quỳnh",
      },
      {
        title: "Giờ mở cửa",
        content: "06:00 AM - 12:00 AM",
      },
      {
        title: "Địa điểm",
        content: "234 Quang Trung",
      },
      {
        contentComponent: <TouchableOpacity
        style={{width:'100%', height:40, backgroundColor:'#0096FF', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Chi tiết</Text>
        </TouchableOpacity>
      }
    ]
  }
];

const Lab1_2 =()=>{
  return(
    <SafeAreaView>
      {sectionsData.map((section, index) => (
        <Section key={index.toString()} {...section} />
      ))}
    </SafeAreaView>
  )
}
export default Lab1_2;
