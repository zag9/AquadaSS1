

import React, { Component } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { connect } from "react-redux";

import MeterInput from "./src/components/MeterInput/MeterInput";
import MeterList from "./src/components/MeterList/MeterList";
import MeterDetail from "./src/components/MeterDetail/MeterDetail";
import {
  addMeter,
  deleteMeter,
  selectMeter,
  deselectMeter
} from "./src/store/actions/index";

class App extends Component {
  meterAddedHandler = (meterName, Lat, Lng) => {
    this.props.onAddMeter(meterName, Lat, Lng);
  };

  meterDeletedHandler = () => {
    this.props.onDeleteMeter();
  };

  modalClosedHandler = () => {
    this.props.onDeselectMeter();
  };

  meterSelectedHandler = key => {
    this.props.onSelectMeter(key);
  };

  render() {
    return (
      // <View>
      <View style={styles.container}>
        <MeterDetail
          selectedMeter={this.props.selectedMeter}
          onItemDeleted={this.meterDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <MeterInput onMeterAdded={this.meterAddedHandler} />
      {/* </View> */}

        {/* <ScrollView> */}
        <Text style={styles.welcome1}> Meter List</Text>

        <MeterList
          meters={this.props.meters}
          onItemSelected={this.meterSelectedHandler}
        />
        {/* </ScrollView> */}
        
        {/* <Button
          title="Upload"
          // style={styles.meterButton}
          onPress
        /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  welcome1: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    margin: 5
    // opacity: 1
  }
});

const mapStateToProps = state => {
  return {
    meters: state.meters.meters,
    selectedMeter: state.meters.selectedMeter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddMeter: (name, Lat, Lng) => dispatch(addMeter(name, Lat, Lng)),
    onDeleteMeter: () => dispatch(deleteMeter()),
    onSelectMeter: key => dispatch(selectMeter(key)),
    onDeselectMeter: () => dispatch(deselectMeter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

