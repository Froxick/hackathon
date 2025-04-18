import { useCallback, useEffect, useState } from 'react';
import { useAppDispath, useAppSelector } from '../../../App/store/store';
import { resetGroup, setGroup } from '../model/groupSlice';

export const useGroupSelector = () => {
	const dispatch = useAppDispath();
    
	
	const defaultGroup = useAppSelector(state => state.auth.user?.group) || '';
	const currentGroup = useAppSelector(state => state.group.group);
    
	const [inputValue, setInputValue] = useState(!defaultGroup ? currentGroup : defaultGroup);
	const [showAccept, setShowAccept] = useState(false);
  
	
	useEffect(() => {
		setInputValue(currentGroup);
	}, [currentGroup]);
  
	
	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setInputValue(newValue);
		setShowAccept(newValue !== currentGroup);
	}, [currentGroup]);
  
	const handleAccept = useCallback(() => {
		dispatch(setGroup(inputValue));
		setShowAccept(false);
	}, [dispatch, inputValue]);
  
	const handleReset = useCallback(() => {
		setInputValue(defaultGroup);
		dispatch(resetGroup());
		setShowAccept(false);
	}, [dispatch, defaultGroup]);
  
	return {
		inputValue,
		showAccept,
		handleInputChange,
		handleAccept,
		handleReset
	};
};