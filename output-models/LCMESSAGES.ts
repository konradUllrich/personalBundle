import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMESSAGESAttributes {
    GUIDMESSAGE: string;
    GUIDSENDER?: string;
    STRAPPGUID?: string;
    STRTARGETGUID?: string;
    STRRECID?: string;
    DTCREATED: Date;
    DTEXPIRE?: Date;
    STRSUBJECT?: string;
    TXTBODY?: string;
}

@Table({
	tableName: "LCMESSAGES",
	timestamps: false 
})
export class LCMESSAGES extends Model<LCMESSAGESAttributes, LCMESSAGESAttributes> implements LCMESSAGESAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDMESSAGE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	GUIDSENDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRTARGETGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRRECID?: string;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DTCREATED!: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEXPIRE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSUBJECT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTBODY?: string;

}