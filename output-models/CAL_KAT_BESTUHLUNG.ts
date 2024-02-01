import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_KAT_BESTUHLUNGAttributes {
    STRID: string;
    B_STANDARDBESTUHLUNG?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    STR_TITEL?: string;
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    LUSERID?: number;
}

@Table({
	tableName: "CAL_KAT_BESTUHLUNG",
	timestamps: false 
})
export class CAL_KAT_BESTUHLUNG extends Model<CAL_KAT_BESTUHLUNGAttributes, CAL_KAT_BESTUHLUNGAttributes> implements CAL_KAT_BESTUHLUNGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDBESTUHLUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}