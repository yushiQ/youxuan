import React, { useEffect } from "react";
// import { connect } from "dva";
import styles from "./index.css";
// import {login,sign} from "../../services/example"
// import * as echarts from "echarts";
//组件
import Listchart from "../../components/lineChart";
function Headermaster() {

 //初始数据
  useEffect(() => {
    // var myChart = echarts.init(document.getElementById("main"));
    // var option = {
    //   title: {
    //     text: "未来一周气温变化",
    //     subtext: "纯属虚构"
    //   },
    //   tooltip: {
    //     trigger: "axis"
    //   },
    //   legend: {
    //     data: ["最高气温", "最低气温"]
    //   },
    //   toolbox: {
    //     show: true,
    //     feature: {
    //       dataZoom: {
    //         yAxisIndex: "none"
    //       },
    //       dataView: { readOnly: false },
    //       magicType: { type: ["line", "bar"] },
    //       restore: {},
    //       saveAsImage: {}
    //     }
    //   },
    //   xAxis: {
    //     type: "category",
    //     boundaryGap: false,
    //     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    //   },
    //   yAxis: {
    //     type: "value",
    //     axisLabel: {
    //       formatter: "{value} °C"
    //     }
    //   },
    //   series: [
    //     {
    //       name: "最高气温",
    //       type: "line",
    //       data: [11, 11, 15, 13, 12, 13, 10],
    //       markPoint: {
    //         data: [
    //           { type: "max", name: "最大值" },
    //           { type: "min", name: "最小值" }
    //         ]
    //       },
    //       markLine: {
    //         data: [{ type: "average", name: "平均值" }]
    //       }
    //     },
    //     {
    //       name: "最低气温",
    //       type: "line",
    //       data: [1, -2, 2, 5, 3, 2, 0],
    //       markPoint: {
    //         data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
    //       },
    //       markLine: {
    //         data: [
    //           { type: "average", name: "平均值" },
    //           [
    //             {
    //               symbol: "none",
    //               x: "90%",
    //               yAxis: "max"
    //             },
    //             {
    //               symbol: "circle",
    //               label: {
    //                 normal: {
    //                   position: "start",
    //                   formatter: "最大值"
    //                 }
    //               },
    //               type: "max",
    //               name: "最高点"
    //             }
    //           ]
    //         ]
    //       }
    //     }
    //   ]
    // };

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  }, []);

  return (
    <div className={styles.masterpage}>
      <header className="header">重点关注学生考试成绩统计表</header>
      <div className="classItem">
        <div>
          选择班级
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
          <span>1703D</span>
        </div>
        <div>名单: <span>张三</span><span>张三</span><span>张三</span><span>(3/人)</span></div>
      </div>
      {/* <div id="main" style={{ width: 600, height: 400 }}></div> */}
      <Listchart/>
    </div>
  );
}

export default Headermaster;
