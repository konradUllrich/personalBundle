import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_KAT_VERANSTALTUNGSARTAttributes {
    STRID: string;
    STR_VERANSTALTUNGSART?: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
}

@Table({
	tableName: "CAL_KAT_VERANSTALTUNGSART",
	timestamps: false 
})
export class CAL_KAT_VERANSTALTUNGSART extends Model<CAL_KAT_VERANSTALTUNGSARTAttributes, CAL_KAT_VERANSTALTUNGSARTAttributes> implements CAL_KAT_VERANSTALTUNGSARTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERANSTALTUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}