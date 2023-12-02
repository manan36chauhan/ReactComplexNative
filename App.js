import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Notification 1', read: false },
    { id: 2, text: 'Notification 2', read: true },
    { id: 3, text: 'Notification 3', read: false },
     { id: 4, text: 'Notification 3', read: false },
    // Add more notifications as needed
  ]);

  const handleNotificationPress = (notificationId) => {
    // Mark the notification as read when tapped
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const renderItem = ({ item }) => {
    const notificationStyle = {
      backgroundColor: item.read ? '#e0e0e0' : '#ffffff', // Use different colors for read and unread notifications
    };

    return (
      <TouchableOpacity
        style={[styles.notificationContainer, notificationStyle]}
        onPress={() => handleNotificationPress(item.id)}
      >
        <Text>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  notificationContainer: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
};

export default NotificationScreen;
