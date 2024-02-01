import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPRTCLASSAttributes {
    GUIDPORTLETCLASS: string;
    STRIMPLCLASS?: string;
}

@Table({
	tableName: "LCPRTCLASS",
	timestamps: false 
})
export class LCPRTCLASS extends Model<LCPRTCLASSAttributes, LCPRTCLASSAttributes> implements LCPRTCLASSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDPORTLETCLASS!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRIMPLCLASS?: string;

}