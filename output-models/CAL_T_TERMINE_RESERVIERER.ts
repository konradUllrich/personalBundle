import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_TERMINE_RESERVIERERAttributes {
    DTEDIT?: Date;
    REF_F9AC76A8?: number;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    STRID: string;
    LUSERID?: number;
}

@Table({
	tableName: "CAL_T_TERMINE_RESERVIERER",
	timestamps: false 
})
export class CAL_T_TERMINE_RESERVIERER extends Model<CAL_T_TERMINE_RESERVIERERAttributes, CAL_T_TERMINE_RESERVIERERAttributes> implements CAL_T_TERMINE_RESERVIERERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_F9AC76A8?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}