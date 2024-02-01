import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCRECIPIENTSAttributes {
    GUIDMESSAGE: string;
    GUIDRECIPIENT: string;
    INTVISITED: number;
    INTDELETED: number;
}

@Table({
	tableName: "LCRECIPIENTS",
	timestamps: false 
})
export class LCRECIPIENTS extends Model<LCRECIPIENTSAttributes, LCRECIPIENTSAttributes> implements LCRECIPIENTSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDMESSAGE!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDRECIPIENT!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTVISITED!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTDELETED!: number;

}