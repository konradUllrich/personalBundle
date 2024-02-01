import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCSCHEDHISTORYAttributes {
    STRGUID: string;
    STRJOBGUID: string;
    DTSTART?: Date;
    DTEND?: Date;
    STRTIMEZONE?: string;
    LSTATUS?: number;
}

@Table({
	tableName: "LCSCHEDHISTORY",
	timestamps: false 
})
export class LCSCHEDHISTORY extends Model<LCSCHEDHISTORYAttributes, LCSCHEDHISTORYAttributes> implements LCSCHEDHISTORYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRJOBGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTSTART?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEND?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRTIMEZONE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LSTATUS?: number;

}